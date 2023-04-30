import { module, test } from 'qunit';
import { setupTest } from 'brain-box-ui/tests/helpers';

module('Unit | Route | ask-chat-gpt', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:ask-chat-gpt');
    assert.ok(route);
  });
});
