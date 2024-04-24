import { j as json } from './index-d7f43214.js';
import { a as auth, s as store, b as GetMonitorStatusByTag } from './webhook-c20a13d6.js';
import 'fs-extra';
import './shared-server-58a5f352.js';
import './helpers-0acb6e43.js';
import './tool-b4b3e524.js';
import './github-c018834c.js';
import 'axios';
import 'marked';
import 'randomstring';

async function POST({ request }) {
  const payload = await request.json();
  const authError = auth(request);
  if (authError !== null) {
    return json(
      { error: authError.message },
      {
        status: 401
      }
    );
  }
  let resp = store(payload);
  return json(resp, {
    status: resp.status
  });
}
async function GET({ request, url }) {
  const authError = auth(request);
  if (authError !== null) {
    return json(
      { error: authError.message },
      {
        status: 401
      }
    );
  }
  const query = url.searchParams;
  const tag = query.get("tag");
  if (!!!tag) {
    return json(
      { error: "tag missing" },
      {
        status: 400
      }
    );
  }
  return json(GetMonitorStatusByTag(tag), {
    status: 200
  });
}

export { GET, POST };
//# sourceMappingURL=_server-1ac0b89e.js.map
