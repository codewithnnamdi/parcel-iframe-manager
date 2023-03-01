const { Transformer } = require('@parcel/core');
const { promisify } = require('util');
const iframe = promisify(require('iframe-resizer').iframeResizer);

class IframeManager extends Transformer {
    async transform() {
        const iframes = this.getAssets().filter(asset => asset.type === 'html' && asset.content.includes('<iframe'));
        const promises = iframes.map(async iframeAsset => {
            const iframeContent = await iframeAsset.getCode();
            const iframeResized = await iframe({
                iframeResizerOptions: {
                    log: false,
                    checkOrigin: false,
                    resizeFrom: 'child',
                    heightCalculationMethod: 'bodyOffset'
                }
            }, iframeAsset, iframeContent);
            return iframeResized;
        });
        await Promise.all(promises);
        return [this.getAsset()];
    }
}

module.exports = IframeManager;