import { module, test } from 'qunit';
import { setupTest } from 'brain-box-ui/tests/helpers';

module('Unit | Route | brain-box-trivia', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:brain-box-trivia');
    assert.ok(route);
  });
});
