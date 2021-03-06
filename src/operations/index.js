import exit from './exit.js';
import up from './nwd/up.js';
import cd from './nwd/cd.js';
import ls from './nwd/ls.js';
import cat from './fs/cat.js';
import add from './fs/add.js';
import rn from './fs/rn.js';
import cp from './fs/cp.js';
import mv from './fs/mv.js';
import rm from './fs/rm.js';
import eol from './os/eol.js';
import cpus from './os/cpus.js';
import homedir from './os/homedir.js';
import username from './os/username.js';
import arch from './os/arch.js';
import hash from './hash.js';
import compress from './zip/compress.js';
import decompress from './zip/decompress.js';

export default {
  '.exit': { argc: 0, operation: exit },
  up: { argc: 0, operation: up },
  cd: { argc: 1, operation: cd },
  ls: { argc: 0, operation: ls },
  cat: { argc: 1, operation: cat },
  add: { argc: 1, operation: add },
  rn: { argc: 2, operation: rn },
  cp: { argc: 2, operation: cp },
  mv: { argc: 2, operation: mv },
  rm: { argc: 1, operation: rm },
  EOL: { argc: 0, operation: eol},
  cpus: { argc: 0, operation: cpus },
  homedir: { argc: 0, operation: homedir },
  username: { argc: 0, operation: username },
  architecture: { argc: 0, operation: arch },
  hash: { argc: 1, operation: hash },
  compress: { argc: 2, operation: compress },
  decompress: { argc: 2, operation: decompress },
};
