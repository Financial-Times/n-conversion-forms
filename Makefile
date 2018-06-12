node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

demo-build: link-views
	webpack --config demos/webpack.config.js
	@$(DONE)

demo-build-watch: link-views
	webpack --watch --config demos/webpack.config.js &
	@$(DONE)

demo: demo-build-watch
	@DEMO_MODE=true nodemon --ext html,css --watch public --watch views demos/start.js

run:
	@DEMO_MODE=true HTTP_MODE=true node demos/app

a11y: demo-build
	@PA11Y=true DEMO_MODE=true node demos/app
	@$(DONE)

test: verify
	make unit-test
	make a11y-demo

unit-test:
	mocha --recursive --reporter spec tests

a11y-demo:
	export TEST_URL=http://localhost:5050; \
	make a11y

smoke:
	n-test smoke --host http://localhost:5050
