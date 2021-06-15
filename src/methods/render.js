export default (config) => {
  const {debug, webgl} = config;
  const canvas = getCanvasID(debug);
  const webglID = webgl ? getWebglID(debug) : null;
  const webglInfo = getWebglInfo(debug);

  const data = {canvas, webglID, webglInfo};

  if(debug) console.log('render: ', data);

  return data;
};


export const getCanvasID = (debug) => {
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const text = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~1!2@3#4$5%6^7&8*9(0)-_=+[{]}|;:',<.>/?";
    ctx.textBaseline = 'top';
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = '#069';
    ctx.fillText(text, 2, 15);
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
    ctx.fillText(text, 4, 17);

    const result = canvas.toDataURL();

    if (debug) {
      document.body.appendChild(canvas);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    return result;
  } catch (error) {

    return null;
  }
};

export const getWebglID = (debug) => {
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('webgl');
    canvas.width = 256;
    canvas.height = 128;

    const f = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}';
    const g = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}';
    const h = ctx.createBuffer();

    ctx.bindBuffer(ctx.ARRAY_BUFFER, h);

    const i = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.7321, 0]);

    ctx.bufferData(ctx.ARRAY_BUFFER, i, ctx.STATIC_DRAW), (h.itemSize = 3), (h.numItems = 3);

    const j = ctx.createProgram();
    const k = ctx.createShader(ctx.VERTEX_SHADER);

    ctx.shaderSource(k, f);
    ctx.compileShader(k);

    const l = ctx.createShader(ctx.FRAGMENT_SHADER);

    ctx.shaderSource(l, g);
    ctx.compileShader(l);
    ctx.attachShader(j, k);
    ctx.attachShader(j, l);
    ctx.linkProgram(j);
    ctx.useProgram(j);

    j.vertexPosAttrib = ctx.getAttribLocation(j, 'attrVertex');
    j.offsetUniform = ctx.getUniformLocation(j, 'uniformOffset');

    ctx.enableVertexAttribArray(j.vertexPosArray);
    ctx.vertexAttribPointer(j.vertexPosAttrib, h.itemSize, ctx.FLOAT, !1, 0, 0);
    ctx.uniform2f(j.offsetUniform, 1, 1);
    ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, h.numItems);

    const n = new Uint8Array(canvas.width * canvas.height * 4);
    ctx.readPixels(0, 0, canvas.width, canvas.height, ctx.RGBA, ctx.UNSIGNED_BYTE, n);

    const result = JSON.stringify(n).replace(/,?"[0-9]+":/g, '');

    if (debug) {
      document.body.appendChild(canvas);
    } else {
      ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT | ctx.STENCIL_BUFFER_BIT);
    }

    return result;
  } catch (error) {
    if (debug) console.log(error);
    return null;
  }
};

export const getWebglInfo = () => {
  try {
    const ctx = document.createElement('canvas').getContext('webgl');

    return {
      VERSION: ctx.getParameter(ctx.VERSION),
      SHADING_LANGUAGE_VERSION: ctx.getParameter(ctx.SHADING_LANGUAGE_VERSION),
      VENDOR: ctx.getParameter(ctx.VENDOR),
      SUPPORTED_EXTENSIONS: ctx.getSupportedExtensions(),
    };
  } catch (error) {
    if (debug) console.log(error);
    return null;
  }
};
