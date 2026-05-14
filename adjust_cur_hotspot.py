#!/usr/bin/env python3
"""
Adjust hotspot(s) inside a .cur file by dx/dy and overwrite the file.
Usage: adjust_cur_hotspot.py [dx] [dy]
Default: dx=4 dy=4
Prints new hotspot coordinates for the first directory entry.
"""
import sys, struct, os

INFILE = 'Pikachu.cur'
DX = int(sys.argv[1]) if len(sys.argv) > 1 else 4
DY = int(sys.argv[2]) if len(sys.argv) > 2 else DX

if not os.path.exists(INFILE):
    print('Input not found:', INFILE)
    sys.exit(2)

with open(INFILE, 'rb') as f:
    data = bytearray(f.read())
L = len(data)

# find ICONDIR for CUR: reserved(2)=0, type=2
pos = None
for i in range(0, min(256, L-6)):
    if data[i:i+4] == b'\x00\x00\x02\x00':
        pos = i
        break
if pos is None:
    # fallback: try at 0
    if L >= 6 and data[0:4] == b'\x00\x00\x02\x00':
        pos = 0
if pos is None:
    print('ICONDIR (CUR) header not found in', INFILE)
    sys.exit(3)

reserved, itype, count = struct.unpack_from('<HHH', data, pos)
if itype != 2:
    print('Warning: found ICONDIR type != 2 at', pos, 'type=', itype)

entries_offset = pos + 6
if entries_offset + count*16 > L:
    print('Truncated directory entries')
    sys.exit(4)

print(f'Found CUR ICONDIR at {pos}, entries={count}, applying dx={DX}, dy={DY}')
new_hotspots = []
for e in range(count):
    eoff = entries_offset + e*16
    width = data[eoff] if data[eoff] != 0 else 256
    height = data[eoff+1] if data[eoff+1] != 0 else 256
    # read existing hotspot (WORD hx, WORD hy) at eoff+8
    hx, hy = struct.unpack_from('<HH', data, eoff+8)
    new_hx = hx + DX
    new_hy = hy + DY
    # clamp
    new_hx = max(0, min(new_hx, width-1))
    new_hy = max(0, min(new_hy, height-1))
    struct.pack_into('<HH', data, eoff+8, new_hx, new_hy)
    new_hotspots.append((new_hx, new_hy, width, height))
    print(f'Entry {e}: size={width}x{height} old=({hx},{hy}) new=({new_hx},{new_hy})')

with open(INFILE, 'wb') as f:
    f.write(data)

if new_hotspots:
    hx, hy, w, h = new_hotspots[0]
    print(f'Wrote {INFILE}; first hotspot now {hx} {hy} (size {w}x{h})')
    # print recommended CSS snippet
    print(f'Recommended CSS hotspot: {hx} {hy}')

sys.exit(0)
