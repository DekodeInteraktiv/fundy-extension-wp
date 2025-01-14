/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { Fragment, useReducer, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const Receipt = () => {
	const [state, setState] = useReducer((s, a) => ({ ...s, ...a }), {
		isLoaded: false,
		isError: false,
		baseURL: window.fundySettings.baseURL ?? null,
		donation: null,
	});

	const { isLoaded, isError, baseURL, donation } = state;

	useEffect(() => {
		const queryParams = getQueryParams();
		if (
			!queryParams.donationId ||
			!queryParams.token ||
			!queryParams.expiry ||
			!baseURL
		) {
			setState({
				isLoaded: true,
				isError: true,
			});
		}

		const params = {
			donation_id: queryParams.donationId,
			token: queryParams.token,
			expiry: queryParams.expiry,
		};

		const queryString = new URLSearchParams(params).toString();

		fetch(baseURL + '/api/v1/donation/receipt?' + queryString, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Network response was not ok.');
			})
			.then((data) => {
				setState({
					isLoaded: true,
					isError: false,
					donation: data,
				});
			})
			.catch(() => {
				setState({
					isLoaded: true,
					isError: true,
				});
			});
	}, [baseURL]);

	if (!isLoaded) {
		return null;
	}

	if (isError || !donation) {
		return (
			<Fragment>
				<p>
					{__(
						'Unfortunately, we were unable to load the details for the donation at this moment; the link may have expired.',
						'fundy',
					)}
				</p>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<table>
				<tbody>
					{donation && donation.company_name ? (
						<Fragment>
							{donation.company_name && (
								<tr>
									<td>{__('Company name', 'fundy')}</td>
									<td>{donation.company_name}</td>
								</tr>
							)}
							{donation.first_name && (
								<tr>
									<td>{__('Contact person', 'fundy')}</td>
									<td>
										{donation.first_name +
											' ' +
											donation?.last_name}
									</td>
								</tr>
							)}
							{donation.created_at && (
								<tr>
									<td>{__('Date', 'fundy')}</td>
									<td>
										{formatDateTime(donation.created_at)}
									</td>
								</tr>
							)}
							{donation.amount && (
								<tr>
									<td>{__('Total amount', 'fundy')}</td>
									<td>{donation.amount}</td>
								</tr>
							)}
							{donation.invoice_url && (
								<tr>
									<td>{__('Invoice', 'fundy')}</td>
									<td>
										<a href={donation.invoice_url}>
											{__('Download invoice', 'fundy')}{' '}
											&#8658;
										</a>
									</td>
								</tr>
							)}
						</Fragment>
					) : (
						<Fragment>
							{donation.first_name && (
								<tr>
									<td>{__('Name', 'fundy')}</td>
									<td>
										{donation.first_name +
											' ' +
											donation?.last_name}
									</td>
								</tr>
							)}
							{donation.created_at && (
								<tr>
									<td>{__('Date', 'fundy')}</td>
									<td>
										{formatDateTime(donation.created_at)}
									</td>
								</tr>
							)}
							{donation.amount && (
								<tr>
									<td>{__('Total amount', 'fundy')}</td>
									<td>{donation.amount}</td>
								</tr>
							)}
						</Fragment>
					)}
				</tbody>
			</table>
		</Fragment>
	);
};

/**
 * Format the donation datetime for display.
 */
function formatDateTime(dateTime) {
	const date = new Date(dateTime);
	return date.toLocaleDateString();
}

/**
 * Return the required query params from the page URL.
 */
function getQueryParams() {
	const params = new URLSearchParams(window.location.search);
	return {
		donationId: params.get('donation_id') || null,
		token: params.get('token') || null,
		expiry: params.get('expiry') || null,
	};
}

export default Receipt;
