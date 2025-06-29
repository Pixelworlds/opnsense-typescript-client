#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIAGNOSTICS_FILE = path.join(__dirname, 'src', 'modules', 'core', 'diagnostics.ts');

// Specific fixes for diagnostics module
const diagnosticsFixes = [
  // Parameter placeholders - remove them from the URLs
  { pattern: /\/\$\{stateid\}\/\$\{creatorid\}/g, replacement: '' },
  { pattern: /\/\$\{section\}/g, replacement: '' },
  { pattern: /\/\$\{status\}/g, replacement: '' },
  { pattern: /\/\$\{uuid\}/g, replacement: '' },
  { pattern: /\/\$\{jobid\}/g, replacement: '' },
  { pattern: /\/\$\{macaddr\}/g, replacement: '' },
  { pattern: /\/\$\{detail\}/g, replacement: '' },
  { pattern: /\/\$\{provider\}\/\$\{from_date\}\/\$\{to_date\}\/\$\{resolution\}/g, replacement: '' },
  { pattern: /\/\$\{provider\}\/\$\{measure\}\/\$\{from_date\}\/\$\{to_date\}\/\$\{resolution\}\/\$\{field\}\/\$\{emulation\}/g, replacement: '' },
  { pattern: /\/\$\{provider\}\/\$\{from_date\}\/\$\{to_date\}\/\$\{field\}\/\$\{measure\}\/\$\{max_hits\}/g, replacement: '' },
  { pattern: /\/\$\{rrd\}\/\$\{detail\}/g, replacement: '' },
  { pattern: /\/\$\{rrd\}\/\$\{unused\}\/\$\{detail\}/g, replacement: '' },
  { pattern: /\/\$\{interfaces\}/g, replacement: '' },
  { pattern: /\/\$\{poll_interval\}/g, replacement: '' },

  // Fix incorrect paths that need parameter removal
  { pattern: /this\.http\.post\(`\/api\/diagnostics\/firewall\/del_state\/\$\{stateid\}\/\$\{creatorid\}`, data\)/g, replacement: 'this.http.post(`/api/diagnostics/firewall/del_state`, data)' },
  { pattern: /this\.http\.get\(`\/api\/diagnostics\/firewall\/pf_statistics\/\$\{section\}`\)/g, replacement: 'this.http.get(`/api/diagnostics/firewall/pf_statistics`)' },
  { pattern: /this\.http\.post\(`\/api\/diagnostics\/interface\/_carp_status`, data\)/g, replacement: 'this.http.post(`/api/diagnostics/interface/_carp_status`, data)' },
  { pattern: /this\.http\.get\(`\/api\/diagnostics\/lvtemplate\/get_item`\)/g, replacement: 'this.http.get(`/api/diagnostics/lvtemplate/get_item`)' },
  { pattern: /this\.http\.post\(`\/api\/diagnostics\/lvtemplate\/del_item`, data\)/g, replacement: 'this.http.post(`/api/diagnostics/lvtemplate/del_item`, data)' },
  { pattern: /this\.http\.post\(`\/api\/diagnostics\/lvtemplate\/set_item`, data\)/g, replacement: 'this.http.post(`/api/diagnostics/lvtemplate/set_item`, data)' },
  { pattern: /this\.http\.get\(`\/api\/diagnostics\/networkinsight\/export\/\$\{from_date\}\/\$\{to_date\}\/\$\{resolution\}`\)/g, replacement: 'this.http.get(`/api/diagnostics/networkinsight/export`)' },
  { pattern: /this\.http\.get\(`\/api\/diagnostics\/networkinsight\/timeserie\/\$\{measure\}\/\$\{from_date\}\/\$\{to_date\}\/\$\{resolution\}\/\$\{field\}\/\$\{emulation\}`\)/g, replacement: 'this.http.get(`/api/diagnostics/networkinsight/timeserie`)' },
  { pattern: /this\.http\.get\(`\/api\/diagnostics\/networkinsight\/top\/\$\{from_date\}\/\$\{to_date\}\/\$\{field\}\/\$\{measure\}\/\$\{max_hits\}`\)/g, replacement: 'this.http.get(`/api/diagnostics/networkinsight/top`)' },
  { pattern: /this\.http\.get\(`\/api\/diagnostics\/packet_capture\/download\/\$\{jobid\}`\)/g, replacement: 'this.http.get(`/api/diagnostics/packet_capture/download`)' },
  { pattern: /this\.http\.get\(`\/api\/diagnostics\/packet_capture\/mac_info\/\$\{macaddr\}`\)/g, replacement: 'this.http.get(`/api/diagnostics/packet_capture/mac_info`)' },
  { pattern: /this\.http\.post\(`\/api\/diagnostics\/packet_capture\/remove\/\$\{jobid\}`, data\)/g, replacement: 'this.http.post(`/api/diagnostics/packet_capture/remove`, data)' },
  { pattern: /this\.http\.post\(`\/api\/diagnostics\/packet_capture\/start\/\$\{jobid\}`, data\)/g, replacement: 'this.http.post(`/api/diagnostics/packet_capture/start`, data)' },
  { pattern: /this\.http\.post\(`\/api\/diagnostics\/packet_capture\/stop\/\$\{jobid\}`, data\)/g, replacement: 'this.http.post(`/api/diagnostics/packet_capture/stop`, data)' },
  { pattern: /this\.http\.get\(`\/api\/diagnostics\/packet_capture\/view\/\$\{jobid\}\/\$\{detail\}`\)/g, replacement: 'this.http.get(`/api/diagnostics/packet_capture/view`)' },
  { pattern: /this\.http\.post\(`\/api\/diagnostics\/ping\/remove\/\$\{jobid\}`, data\)/g, replacement: 'this.http.post(`/api/diagnostics/ping/remove`, data)' },
  { pattern: /this\.http\.post\(`\/api\/diagnostics\/ping\/start\/\$\{jobid\}`, data\)/g, replacement: 'this.http.post(`/api/diagnostics/ping/start`, data)' },
  { pattern: /this\.http\.post\(`\/api\/diagnostics\/ping\/stop\/\$\{jobid\}`, data\)/g, replacement: 'this.http.post(`/api/diagnostics/ping/stop`, data)' },
  { pattern: /this\.http\.get\(`\/api\/diagnostics\/systemhealth\/export_as_c_s_v\/\$\{rrd\}\/\$\{detail\}`\)/g, replacement: 'this.http.get(`/api/diagnostics/systemhealth/export_as_c_s_v`)' },
  { pattern: /this\.http\.get\(`\/api\/diagnostics\/systemhealth\/get_system_health\/\$\{rrd\}\/\$\{unused\}\/\$\{detail\}`\)/g, replacement: 'this.http.get(`/api/diagnostics/systemhealth/get_system_health`)' },
  { pattern: /this\.http\.get\(`\/api\/diagnostics\/traffic\/_top\/\$\{interfaces\}`\)/g, replacement: 'this.http.get(`/api/diagnostics/traffic/_top`)' },
  { pattern: /this\.http\.get\(`\/api\/diagnostics\/traffic\/stream\/\$\{poll_interval\}`\)/g, replacement: 'this.http.get(`/api/diagnostics/traffic/stream`)' },
];

function fixDiagnosticsModule() {
  try {
    console.log('🔧 Fixing diagnostics module...');
    
    let content = fs.readFileSync(DIAGNOSTICS_FILE, 'utf8');
    let originalContent = content;
    let fixCount = 0;

    // Apply all diagnostic-specific fixes
    diagnosticsFixes.forEach(({ pattern, replacement }) => {
      const matches = content.match(pattern);
      if (matches) {
        fixCount += matches.length;
        content = content.replace(pattern, replacement);
        console.log(`  Applied fix: ${matches.length} instances`);
      }
    });

    // Write back if changes were made
    if (content !== originalContent) {
      fs.writeFileSync(DIAGNOSTICS_FILE, content, 'utf8');
      console.log(`✅ Fixed diagnostics.ts: ${fixCount} endpoint fixes applied`);
    } else {
      console.log('⚪ diagnostics.ts: No fixes needed');
    }

    return fixCount;
  } catch (error) {
    console.error('❌ Error fixing diagnostics module:', error);
    return 0;
  }
}

// Main execution
function main() {
  console.log('🔧 Starting Diagnostics Module Fix...\n');

  const fixes = fixDiagnosticsModule();

  console.log('\n🎯 Diagnostics Module Fix Summary:');
  console.log(`Total endpoint fixes: ${fixes}`);
  console.log('✅ Diagnostics module fix completed!');

  if (fixes > 0) {
    console.log('\n💡 Recommendation: Run the endpoint coverage test to verify the fixes');
    console.log('   Command: yarn test src/__tests__/module-comparison.test.ts -t "should analyze core module endpoint coverage"');
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixDiagnosticsModule, diagnosticsFixes };