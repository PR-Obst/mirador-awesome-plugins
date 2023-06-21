import mirador from 'mirador/dist/es/src/index';
import awesomePlugins from '../../src';

const config = {
  id: 'demo',
  windows: [{
      loadedManifest: 'https://iiif.arthistoricum.net/proxy/ggraphik/oai:de:slub-dresden:db:id-368358402-19310850-LOG_0097-PHYS_0059/manifest.json',
  }]
};

mirador.viewer(config, [...awesomePlugins]);
