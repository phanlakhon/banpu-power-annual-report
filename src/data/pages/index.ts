import page000 from './000';
import page001 from './001';
import page002 from './002';
import page003 from './003';
import page004 from './004';
import page005 from './005';
import page006 from './006';
import page007 from './007';
import page008 from './008';
import page009 from './009';
import page010 from './010';
import page011 from './011';
import page012 from './012';
import page013 from './013';
import page014 from './014';
import page015 from './015';
import page016 from './016';
import page017 from './017';
import page018 from './018';
import page019 from './019';
import page020 from './020';
import page021 from './021';
import page022 from './022';
import page023 from './023';
import page024 from './024';

export type { BilingualText, BilingualSrc, PageSection, PageData, TableRowData, TableSectionData } from './types';

import type { PageData } from './types';

export const pagesData: Record<string, PageData> = {
    '000': page000,
    '001': page001,
    '002': page002,
    '003': page003,
    '004': page004,
    '005': page005,
    '006': page006,
    '007': page007,
    '008': page008,
    '009': page009,
    '010': page010,
    '011': page011,
    '012': page012,
    '013': page013,
    '014': page014,
    '015': page015,
    '016': page016,
    '017': page017,
    '018': page018,
    '019': page019,
    '020': page020,
    '021': page021,
    '022': page022,
    '023': page023,
    '024': page024,
};

export const pageOrder = [
    '000', '001', '002', '003', '004',
    '005', '006', '007', '008', '009', '010', '011', '012', '013', '014', '015', '016', '017',
    '018', '019', '020', '021', '022', '023', '024',
];
