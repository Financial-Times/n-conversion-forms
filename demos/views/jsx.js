function main ({title}) {
	return `
<!DOCTYPE html>
<html>
	<head>
		<title>${title}</title>
		<link rel="stylesheet" href="/public/main.css">
		<link rel="stylesheet" href="/public/component.css">
	</head>

	<body style="background-color:#fff1e5;" id="demo-page">
		<div class="o-layout o-layout--docs" data-o-component="o-layout">
			<div class="o-layout__header">
				<header class="o-header-services" data-o-component="o-header-services">
					<div class="o-header-services__top">
							<div class="o-header-services__logo"></div>

							<div class="o-header-services__title">
								<span class="o-header-services__product-name"><a href="/">n-conversion-forms</a></span>
							</div>
					</div>
				</header>
			</div>
			<div id="demoSidebar" class="o-layout__sidebar o-layout-typography">
			</div>
			<div class="o-layout__main o-layout-typography">
				<div class="ncf" id="demoContent" />
			</div>
		</div>
	</body>

	<script type="text/javascript" src="/public/demo.js"></script>
</html>
`;
}

module.exports = main;
