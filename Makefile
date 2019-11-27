test:
	suppressor pass 'babel-node ./tests/collection.test.js'
	FUNCTION_VERSION=fail1 suppressor fail 'babel-node ./tests/collection.test.js'
	FUNCTION_VERSION=fail2 suppressor fail 'babel-node ./tests/collection.test.js'
tst:	
	npx babel-node ./test/collection.test.js
tst2:
	npx babel-node ./test/take.test.js

.PHONY: test
