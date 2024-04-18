import assert from 'node:assert'
import test, {describe} from 'node:test'
import rfc3986 from './index.mjs'

describe('rfc3986', () => {
  test('should encode ASCII correctly', async () => {
  	const exceptions = {
  		'!': '%21',
			'\'': '%27',
			'(': '%28',
			')': '%29',
			'*': '%2a'
		}
  	for(const code of new Array(128).keys()) {
			const char = String.fromCharCode(code)
			assert(rfc3986(char).toUpperCase() === (exceptions[char] || encodeURIComponent(char)).toUpperCase())
		}
  })
})
