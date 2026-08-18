import p0 from './portrait_parts/p0'
import p1 from './portrait_parts/p1'
import p2 from './portrait_parts/p2'
import p3 from './portrait_parts/p3'
import p4 from './portrait_parts/p4'

// Portrait stored as base64 data-URI chunks so the project stays text-only.
// Chunks concatenate back into the original data:image/jpeg;base64 source.
const portrait = p0 + p1 + p2 + p3 + p4

export default portrait
