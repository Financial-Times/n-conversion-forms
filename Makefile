node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save --no-package-lock @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

build:
	npm run build

run:
	NODE_OPTIONS=--openssl-legacy-provider npm run storybook

test:
	make jest

jest:
	jest

smoke:
	n-test smoke --host http://localhost:5005

test-update-snapshots:
	NODE_ENV=test jest --updateSnapshot

prettier:
	npx prettier --config .prettierrc.js --write './**/*'
