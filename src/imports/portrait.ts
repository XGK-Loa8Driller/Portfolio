import p0 from './portrait_parts/p0'
import p1 from './portrait_parts/p1'
import p2 from './portrait_parts/p2'
import p3 from './portrait_parts/p3'
import p4 from './portrait_parts/p4'
import p5 from './portrait_parts/p5'
import p6 from './portrait_parts/p6'
import p7 from './portrait_parts/p7'
import p8 from './portrait_parts/p8'
import p9 from './portrait_parts/p9'
import p10 from './portrait_parts/p10'
import p11 from './portrait_parts/p11'
import p12 from './portrait_parts/p12'

// Portrait stored as base64 data-URI chunks so the project stays text-only.
// Chunks concatenate back into the original data:image/jpeg;base64 source.
const portrait = p0 + p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12

export default portrait
