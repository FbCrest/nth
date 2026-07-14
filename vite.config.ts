import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';

// ── Helper: đọc/ghi một data file TS ──
function makeDataStore(dataFile: string, exportName: string, interfaceDef: string) {
  const readData = (): any[] => {
    try {
      const content = fs.readFileSync(dataFile, 'utf-8');
      const re = new RegExp(`export const ${exportName}[^=]*= (\\[[\\s\\S]*?\\]);`);
      const match = content.match(re);
      if (!match) return [];
      return JSON.parse(match[1]);
    } catch { return []; }
  };

  const writeData = (items: any[]) => {
    const json = JSON.stringify(items, null, 2);
    const content = `${interfaceDef}\nexport const ${exportName}: ${exportName.replace('Data', '').charAt(0).toUpperCase() + exportName.replace('Data', '').slice(1).replace(/([A-Z])/g, '$1')}[] = ${json};\n`;
    fs.writeFileSync(dataFile, content, 'utf-8');
  };

  return { readData, writeData };
}

// ── Plugin: tất cả API local ──
function localDataApiPlugin() {
  const BASE = path.resolve(__dirname, 'src/data');
  const PUBLIC = path.resolve(__dirname, 'public');

  // Store quân cờ
  const quanCoStore = {
    file: path.join(BASE, 'co-nghich-quan-co.ts'),
    read: (): any[] => {
      try {
        const c = fs.readFileSync(path.join(BASE, 'co-nghich-quan-co.ts'), 'utf-8');
        const m = c.match(/export const quanCoData[^=]*= (\[[\s\S]*?\]);/);
        return m ? JSON.parse(m[1]) : [];
      } catch { return []; }
    },
    write: (items: any[]) => {
      const content = `export interface QuanCo {
  id: string;
  ten: string;
  ten_zh: string | null;
  gia_xu: number | null;
  loai: string | null;
  tags: string[];
  lien_ket_phe: string[];
  lien_ket_phai: string[];
  ky_nang_ten: string | null;
  ky_nang_icon: string | null;
  ky_nang_mo_ta: string | null;
  image_url: string | null;
}

export const quanCoData: QuanCo[] = ${JSON.stringify(items, null, 2)};
`;
      fs.writeFileSync(path.join(BASE, 'co-nghich-quan-co.ts'), content, 'utf-8');
    },
  };

  // Store trang bị
  const trangBiStore = {
    read: (): any[] => {
      try {
        const c = fs.readFileSync(path.join(BASE, 'co-nghich-trang-bi-co.ts'), 'utf-8');
        const m = c.match(/export const trangBiCoData[^=]*= (\[[\s\S]*?\]);/);
        return m ? JSON.parse(m[1]) : [];
      } catch { return []; }
    },
    write: (items: any[]) => {
      const content = `export interface TrangBiCo {
  id: string;
  ten: string;
  ten_zh: string | null;
  danh_muc: string | null;
  hieu_qua: string | null;
  dac_hieu: string | null;
  image_url: string | null;
}

export const trangBiCoData: TrangBiCo[] = ${JSON.stringify(items, null, 2)};
`;
      fs.writeFileSync(path.join(BASE, 'co-nghich-trang-bi-co.ts'), content, 'utf-8');
    },
  };

  // Store buff
  const buffStore = {
    read: (): any[] => {
      try {
        const c = fs.readFileSync(path.join(BASE, 'co-nghich-buff-co.ts'), 'utf-8');
        const m = c.match(/export const buffCoData[^=]*= (\[[\s\S]*?\]);/);
        return m ? JSON.parse(m[1]) : [];
      } catch { return []; }
    },
    write: (items: any[]) => {
      const content = `export interface BuffCo {
  id: string;
  ten: string;
  ten_zh: string | null;
  do_hiem: string | null;
  mo_ta: string | null;
  image_url: string | null;
}

export const buffCoData: BuffCo[] = ${JSON.stringify(items, null, 2)};
`;
      fs.writeFileSync(path.join(BASE, 'co-nghich-buff-co.ts'), content, 'utf-8');
    },
  };

  // Store buff kiếm
  const buffKiemStore = {
    read: (): any[] => {
      try {
        const c = fs.readFileSync(path.join(BASE, 'co-nghich-buff-kiem.ts'), 'utf-8');
        const m = c.match(/export const buffKiemData[^=]*= (\[[\s\S]*?\]);/);
        return m ? JSON.parse(m[1]) : [];
      } catch { return []; }
    },
    write: (items: any[]) => {
      const content = `export interface BuffKiem {
  id: string;
  ten: string;
  ten_zh: string | null;
  do_hiem: string | null;
  mo_ta: string | null;
  image_url: string | null;
}

export const buffKiemData: BuffKiem[] = ${JSON.stringify(items, null, 2)};
`;
      fs.writeFileSync(path.join(BASE, 'co-nghich-buff-kiem.ts'), content, 'utf-8');
    },
  };

  // Store lien ket phe
  const lienKetPheStore = {
    read: (): any[] => {
      try {
        const c = fs.readFileSync(path.join(BASE, 'co-nghich-lien-ket-phe.ts'), 'utf-8');
        const m = c.match(/export const lienKetPheData[^=]*= (\[[\s\S]*?\]);/);
        return m ? JSON.parse(m[1]) : [];
      } catch { return []; }
    },
    write: (items: any[]) => {
      const content = `export interface LienKetPhe {\n  id: string;\n  ten: string;\n  slug: string;\n  image_url: string | null;\n}\n\nexport const lienKetPheData: LienKetPhe[] = ${JSON.stringify(items, null, 2)};\n`;
      fs.writeFileSync(path.join(BASE, 'co-nghich-lien-ket-phe.ts'), content, 'utf-8');
    },
  };

  // Store lien ket phai
  const lienKetPhaiStore = {
    read: (): any[] => {
      try {
        const c = fs.readFileSync(path.join(BASE, 'co-nghich-lien-ket-phai.ts'), 'utf-8');
        const m = c.match(/export const lienKetPhaiData[^=]*= (\[[\s\S]*?\]);/);
        return m ? JSON.parse(m[1]) : [];
      } catch { return []; }
    },
    write: (items: any[]) => {
      const content = `export interface LienKetPhai {\n  id: string;\n  ten: string;\n  slug: string;\n  image_url: string | null;\n}\n\nexport const lienKetPhaiData: LienKetPhai[] = ${JSON.stringify(items, null, 2)};\n`;
      fs.writeFileSync(path.join(BASE, 'co-nghich-lien-ket-phai.ts'), content, 'utf-8');
    },
  };

  // Store roles
  const rolesStore = {
    read: (): any[] => {
      try {
        const c = fs.readFileSync(path.join(BASE, 'co-nghich-roles.ts'), 'utf-8');
        const m = c.match(/export const quanCoRoles[^=]*= (\[[\s\S]*?\]);/);
        return m ? JSON.parse(m[1]) : [];
      } catch { return []; }
    },
    write: (items: any[]) => {
      const content = `export interface QuanCoRole {\n  id: string;\n  label: string;\n  color: string;\n}\n\nexport const quanCoRoles: QuanCoRole[] = ${JSON.stringify(items, null, 2)};\n`;
      fs.writeFileSync(path.join(BASE, 'co-nghich-roles.ts'), content, 'utf-8');
    },
  };

  // Store icons
  const iconStore = {
    read: (): any[] => {
      try {
        const c = fs.readFileSync(path.join(BASE, 'co-nghich-icons.ts'), 'utf-8');
        const m = c.match(/export const coNghichIcons[^=]*= (\[[\s\S]*?\]);/);
        return m ? JSON.parse(m[1]) : [];
      } catch { return []; }
    },
    write: (items: any[]) => {
      const content = `export interface CoNghichIcon {
  slug: string;
  label: string;
  image_url: string;
}

export const coNghichIcons: CoNghichIcon[] = ${JSON.stringify(items, null, 2)};

export function getIcon(slug: string): CoNghichIcon | undefined {
  return coNghichIcons.find(i => i.slug === slug);
}
`;
      fs.writeFileSync(path.join(BASE, 'co-nghich-icons.ts'), content, 'utf-8');
    },
  };
  const makeCrudHandler = (store: { read: () => any[]; write: (items: any[]) => void }) =>
    async (req: any, res: any) => {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      if (req.method === 'OPTIONS') { res.statusCode = 204; res.end(); return; }

      if (req.method === 'GET') { res.end(JSON.stringify({ items: store.read() })); return; }

      const bodyStr = await new Promise<string>((resolve) => {
        let d = ''; req.on('data', (c: any) => { d += c; }); req.on('end', () => resolve(d));
      });
      const body = JSON.parse(bodyStr || '{}');

      if (req.method === 'POST') {
        const items = store.read();
        const item = { ...body, id: Date.now().toString() };
        items.push(item);
        store.write(items);
        res.end(JSON.stringify({ ok: true, item }));
      } else if (req.method === 'PUT') {
        const items = store.read();
        const idx = items.findIndex((i: any) => i.id === body.id);
        if (idx !== -1) { items[idx] = body; store.write(items); }
        res.end(JSON.stringify({ ok: true }));
      } else if (req.method === 'DELETE') {
        store.write(store.read().filter((i: any) => i.id !== body.id));
        res.end(JSON.stringify({ ok: true }));
      } else {
        res.statusCode = 405; res.end(JSON.stringify({ error: 'Method not allowed' }));
      }
    };

  return {
    name: 'local-data-api',
    configureServer(server: any) {
      // Helper: reorder endpoint cho 1 store
      const makeReorderHandler = (store: { read: () => any[]; write: (items: any[]) => void }) =>
        async (req: any, res: any) => {
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'PUT, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          if (req.method === 'OPTIONS') { res.statusCode = 204; res.end(); return; }
          if (req.method !== 'PUT') { res.statusCode = 405; res.end('{}'); return; }
          const bodyStr = await new Promise<string>((resolve) => {
            let d = ''; req.on('data', (c: any) => { d += c; }); req.on('end', () => resolve(d));
          });
          const { ids } = JSON.parse(bodyStr || '{}');
          if (!Array.isArray(ids)) { res.statusCode = 400; res.end(JSON.stringify({ error: 'ids required' })); return; }
          const items = store.read();
          const map = new Map(items.map((i: any) => [i.id, i]));
          const reordered = ids.map((id: string) => map.get(id)).filter(Boolean);
          // append any items not in ids at end
          const idsSet = new Set(ids);
          items.forEach((i: any) => { if (!idsSet.has(i.id)) reordered.push(i); });
          store.write(reordered);
          res.end(JSON.stringify({ ok: true }));
        };

      // CRUD endpoints
      server.middlewares.use('/api/quan-co', makeCrudHandler(quanCoStore));
      server.middlewares.use('/api/trang-bi-co', makeCrudHandler(trangBiStore));
      server.middlewares.use('/api/buff-co', makeCrudHandler(buffStore));
      server.middlewares.use('/api/buff-kiem', makeCrudHandler(buffKiemStore));
      server.middlewares.use('/api/icons', makeCrudHandler(iconStore));
      server.middlewares.use('/api/roles', makeCrudHandler(rolesStore));
      server.middlewares.use('/api/lien-ket-phe', makeCrudHandler(lienKetPheStore));
      server.middlewares.use('/api/lien-ket-phai', makeCrudHandler(lienKetPhaiStore));

      // Reorder endpoints
      server.middlewares.use('/api/reorder/quan-co', makeReorderHandler(quanCoStore));
      server.middlewares.use('/api/reorder/trang-bi-co', makeReorderHandler(trangBiStore));
      server.middlewares.use('/api/reorder/buff-co', makeReorderHandler(buffStore));

      // Store icons
      const iconsStore = {
        read: (): any[] => {
          try {
            const c = fs.readFileSync(path.join(BASE, 'co-nghich-icons.ts'), 'utf-8');
            const m = c.match(/export const coNghichIconsData[^=]*= (\[[\s\S]*?\]);/);
            return m ? JSON.parse(m[1]) : [];
          } catch { return []; }
        },
        write: (items: any[]) => {
          const content = `export interface CoNghichIcon {
  id: string;
  slug: string;
  label: string;
  image_url: string;
}

export const coNghichIconsData: CoNghichIcon[] = ${JSON.stringify(items, null, 2)};
`;
          fs.writeFileSync(path.join(BASE, 'co-nghich-icons.ts'), content, 'utf-8');
        },
      };
      server.middlewares.use('/api/co-nghich-icons', makeCrudHandler(iconsStore));

      // Browse thư mục trong public/images
      server.middlewares.use('/api/browse-dir', async (req: any, res: any) => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (req.method === 'OPTIONS') { res.statusCode = 204; res.end(); return; }

        const chunks: Buffer[] = [];
        await new Promise<void>((resolve) => {
          req.on('data', (c: Buffer) => chunks.push(c));
          req.on('end', resolve);
        });
        const body = chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf-8')) : {};
        const subPath = body.path || '';
        const dirPath = path.join(PUBLIC, 'images', subPath);

        try {
          const entries = fs.readdirSync(dirPath, { withFileTypes: true });
          const dirs = entries.filter(e => e.isDirectory()).map(e => e.name);
          res.end(JSON.stringify({ ok: true, dirs, current: subPath ? 'images/' + subPath : 'images' }));
        } catch {
          res.end(JSON.stringify({ ok: false, dirs: [], current: 'images' }));
        }
      });
      server.middlewares.use('/api/upload-image', async (req: any, res: any) => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        if (req.method === 'OPTIONS') { res.statusCode = 204; res.end(); return; }
        if (req.method !== 'POST') { res.statusCode = 405; res.end('{}'); return; }

        const chunks: Buffer[] = [];
        await new Promise<void>((resolve) => {
          req.on('data', (c: Buffer) => chunks.push(c));
          req.on('end', resolve);
        });

        try {
          const { path: imgPath, fileName, base64 } = JSON.parse(Buffer.concat(chunks).toString('utf-8'));

          if (!imgPath || !fileName || !base64) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Missing path, fileName, or base64' }));
            return;
          }

          // Tạo thư mục nếu chưa có
          const dirPath = path.join(PUBLIC, imgPath);
          if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

          // Ghi file từ base64
          const fileBuffer = Buffer.from(base64, 'base64');
          const fullPath = path.join(dirPath, fileName);
          fs.writeFileSync(fullPath, fileBuffer);

          // Trả về URL public với path đúng encoding
          const publicUrl = '/' + imgPath.split(path.sep).join('/') + '/' + fileName;
          res.end(JSON.stringify({ ok: true, url: publicUrl }));
        } catch (e: any) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: e.message }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), localDataApiPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
