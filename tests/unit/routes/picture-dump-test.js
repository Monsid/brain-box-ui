import { module, test } from 'qunit';
import { setupTest } from 'brain-box-ui/tests/helpers';

module('Unit | Route | picture-dump', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:picture-dump');
    assert.ok(route);
  });
});
