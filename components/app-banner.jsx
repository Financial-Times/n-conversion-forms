import React from 'react';

export function AppBanner() {
	return (
		<div id="appBanner" className="ncf ncf__app-banner">
			<div className="ncf__app-banner-inner">
				<div className="ncf__app-banner-image">
					<img
						alt="FT app"
						src="https://www.ft.com/__origami/service/image/v2/images/raw/https://ft-next-assets-prod.s3-eu-west-1.amazonaws.com/assets/product/republishing-app-packshot-191107.png?source=ip-envoy"
					/>
				</div>
				<div className="ncf__app-banner-content">
					<div className="ncf__app-banner-header">Get our free App</div>
					Download the <span className="ncf__app-banner-strong">FT app</span> to
					access articles on the move.
				</div>
				<div className="ncf__app-banner-actions">
					<div className="ncf__app-banner-action ncf__app-banner-action--ios">
						<a
							href="https://itunes.apple.com/app/apple-store/id1200842933?pt=246269&ct=onsite-app-promotion&mt=8"
							target="_blank"
							role="link"
						>
							<img
								src="https://www.ft.com/__assets/creatives/tour/apps/ios-download.svg"
								alt="Download from the iOS App store"
								height="35"
							/>
						</a>
					</div>
					<div className="ncf__app-banner-action ncf__app-banner-action--android">
						<a
							href="https://play.google.com/store/apps/details?id=com.ft.news&referrer=utm_source%3Donsite-app-promotion%26utm_campaign%3DOnsite%2520Messaging"
							target="_blank"
							role="link"
						>
							<img
								src="https://www.ft.com/__origami/service/image/v2/images/raw/https%253A%252F%252Fwww.ft.com%252F__assets%252Fcreatives%252Ftour%252Fapps%252Fgoogle-play-badge-3x.png?source=ip-envoy"
								height="35"
								alt="Download on Google Play"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
