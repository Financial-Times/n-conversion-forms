node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

build:
	npm run build

run:
	npm run storybook

test: verify
	make jest
	make unit-test

unit-test:
	mocha --recursive --reporter spec test

jest:
	jest

smoke:
	n-test smoke --host http://localhost:5005

test-update-snapshots:
	NODE_ENV=test jest --updateSnapshot
