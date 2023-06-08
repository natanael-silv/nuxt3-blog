import Prism from 'prismjs';
import 'prismjs/themes/prism-twilight.css';

// Add the Prism Toolbar plugin
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';

import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords';
import 'prismjs/plugins/show-language/prism-show-language';
import 'prismjs/plugins/autoloader/prism-autoloader';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-toml';

// Set Vue SFC to markdown
Prism.languages.vue = Prism.languages.markup;

export default Prism;
