node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

demo-build:
	webpack --config demos/webpack.config.js
	node-sass demos/main.scss public/main.css --include-path bower_components
	@$(DONE)

demo: demo-build
	@DEMO_MODE=true nodemon --ext html,css --watch public --watch views demos/app.js

run:
	@DEMO_MODE=true node demos/app

a11y: demo-build
	@PA11Y=true node demos/app
	@$(DONE)

test: verify
	make unit-test
	make a11y-demo

unit-test:
	mocha --recursive --reporter spec tests

a11y-demo:
	export TEST_URL=http://localhost:5005; \
	make a11y

smoke:
	n-test smoke --host http://localhost:5005
