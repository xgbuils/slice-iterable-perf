Benchmark [slice-iterable](https://github.com/xgbuils/slice-iterable) and [slice-arraylike-iterable](https://github.com/xgbuils/slice-arraylike-iterable) over...

- ramda
- imlazy
- inmutable.js
- native

## Usage

Clone and:

``` bash
npm install
npm run perf
```

## Benchmarks

```
benchmark
    slice
        array
            start index parameter
                - small start
                    - slice-iterable@0.1.3 x 8,455 ops/sec ±0.42% (89 runs sampled)
                    - slice-arraylike-iterable@0.1.11 x 15,657 ops/sec ±1.80% (82 runs sampled)
                    - imlazy@6.3.1 x 10,395 ops/sec ±2.39% (82 runs sampled)
                    - ramda@0.24.1 x 90,419 ops/sec ±0.99% (88 runs sampled)
                    - immutable@3.8.1 x 3.38 ops/sec ±4.51% (13 runs sampled)
                    - native x 89,348 ops/sec ±0.61% (84 runs sampled)
                    Fastest is ramda@0.24.1
                - medium start
                    - slice-iterable@0.1.3 x 292 ops/sec ±0.12% (81 runs sampled)
                    - slice-arraylike-iterable@0.1.11 x 15,931 ops/sec ±0.44% (88 runs sampled)
                    - imlazy@6.3.1 x 969 ops/sec ±0.43% (84 runs sampled)
                    - ramda@0.24.1 x 86,832 ops/sec ±0.56% (86 runs sampled)
                    - immutable@3.8.1 x 3.30 ops/sec ±7.63% (13 runs sampled)
                    - native x 89,136 ops/sec ±0.55% (85 runs sampled)
                    Fastest is native
                - big start
                    - slice-iterable@0.1.3 x 2.97 ops/sec ±0.09% (12 runs sampled)
                    - slice-arraylike-iterable@0.1.11 x 15,830 ops/sec ±0.53% (84 runs sampled)
                    - imlazy@6.3.1 x 11.06 ops/sec ±0.11% (31 runs sampled)
                    - ramda@0.24.1 x 87,618 ops/sec ±1.40% (87 runs sampled)
                    - immutable@3.8.1 x 3.25 ops/sec ±7.15% (13 runs sampled)
                    - native x 88,903 ops/sec ±0.53% (87 runs sampled)
                    Fastest is native
            length of slice
                - small slice
                    - slice-iterable@0.1.3 x 11,619 ops/sec ±0.51% (86 runs sampled)
                    - slice-arraylike-iterable@0.1.11 x 15,858 ops/sec ±0.58% (87 runs sampled)
                    - imlazy@6.3.1 x 11,931 ops/sec ±0.53% (84 runs sampled)
                    - ramda@0.24.1 x 85,174 ops/sec ±0.52% (84 runs sampled)
                    - immutable@3.8.1 x 3.30 ops/sec ±6.55% (13 runs sampled)
                    - native x 90,268 ops/sec ±0.56% (86 runs sampled)
                    Fastest is native
                - medium
                    - slice-iterable@0.1.3 x 121 ops/sec ±0.11% (70 runs sampled)
                    - slice-arraylike-iterable@0.1.11 x 164 ops/sec ±0.12% (76 runs sampled)
                    - imlazy@6.3.1 x 141 ops/sec ±0.14% (72 runs sampled)
                    - ramda@0.24.1 x 932 ops/sec ±0.56% (85 runs sampled)
                    - immutable@3.8.1 x 3.28 ops/sec ±6.81% (13 runs sampled)
                    - native x 914 ops/sec ±2.38% (84 runs sampled)
                    Fastest is ramda@0.24.1,native
                - big
                    - slice-iterable@0.1.3 x 1.18 ops/sec ±0.36% (7 runs sampled)
                    - slice-arraylike-iterable@0.1.11 x 1.61 ops/sec ±0.12% (9 runs sampled)
                    - imlazy@6.3.1 x 1.38 ops/sec ±1.02% (8 runs sampled)
                    - ramda@0.24.1 x 9.05 ops/sec ±2.86% (26 runs sampled)
                    - immutable@3.8.1 x 2.22 ops/sec ±5.24% (10 runs sampled)
                    - native x 9.09 ops/sec ±2.06% (26 runs sampled)
                    Fastest is native,ramda@0.24.1
    multiple slices
        array
            descreasing end parameter
                - few slices
                    - slice-arraylike-iterable@0.1.11 x 168,517 ops/sec ±0.60% (85 runs sampled)
                    - slice-iterable@0.1.3 x 138,608 ops/sec ±0.60% (85 runs sampled)
                    - imlazy@6.3.1 x 8,145 ops/sec ±3.40% (73 runs sampled)
                    - ramda@0.24.1 x 214,937 ops/sec ±4.07% (84 runs sampled)
                    - immutable@3.8.1 x 19,837 ops/sec ±2.60% (82 runs sampled)
                    - native x 343,877 ops/sec ±0.53% (86 runs sampled)
                    Fastest is native
                - enough slices
                    - slice-arraylike-iterable@0.1.11 x 80,730 ops/sec ±2.26% (83 runs sampled)
                    - slice-iterable@0.1.3 x 74,937 ops/sec ±1.35% (88 runs sampled)
                    - imlazy@6.3.1 x 1,659 ops/sec ±3.60% (73 runs sampled)
                    - ramda@0.24.1 x 49,413 ops/sec ±0.49% (87 runs sampled)
                    - immutable@3.8.1 x 11,783 ops/sec ±2.71% (83 runs sampled)
                    - native x 83,101 ops/sec ±1.53% (83 runs sampled)
                    Fastest is native
                - a lot of slices
                    - slice-arraylike-iterable@0.1.11 x 23,377 ops/sec ±1.65% (85 runs sampled)
                    - slice-iterable@0.1.3 x 22,125 ops/sec ±2.27% (86 runs sampled)
                    - imlazy@6.3.1 x 337 ops/sec ±3.46% (71 runs sampled)
                    - ramda@0.24.1 x 8,063 ops/sec ±1.20% (86 runs sampled)
                    - immutable@3.8.1 x 3,856 ops/sec ±1.55% (87 runs sampled)
                    - native x 12,408 ops/sec ±1.89% (84 runs sampled)
                    Fastest is slice-arraylike-iterable@0.1.11
            increasing end parameter
                - few slices
                    - slice-arraylike-iterable@0.1.11 x 213,505 ops/sec ±1.63% (83 runs sampled)
                    - slice-iterable@0.1.3 x 167,082 ops/sec ±2.14% (78 runs sampled)
                    - imlazy@6.3.1 x 7,752 ops/sec ±3.79% (73 runs sampled)
                    - ramda@0.24.1 x 225,129 ops/sec ±0.58% (83 runs sampled)
                    - immutable@3.8.1 x 24,152 ops/sec ±2.08% (85 runs sampled)
                    - native x 360,638 ops/sec ±0.57% (86 runs sampled)
                    Fastest is native
                - enough slices
                    - slice-arraylike-iterable@0.1.11 x 193,738 ops/sec ±0.49% (86 runs sampled)
                    - slice-iterable@0.1.3 x 153,018 ops/sec ±0.55% (86 runs sampled)
                    - imlazy@6.3.1 x 1,605 ops/sec ±3.57% (73 runs sampled)
                    - ramda@0.24.1 x 55,766 ops/sec ±1.16% (85 runs sampled)
                    - immutable@3.8.1 x 23,724 ops/sec ±2.65% (84 runs sampled)
                    - native x 107,965 ops/sec ±0.68% (85 runs sampled)
                    Fastest is slice-arraylike-iterable@0.1.11
                - a lot of slices
                    - slice-arraylike-iterable@0.1.11 x 131,683 ops/sec ±0.47% (84 runs sampled)
                    - slice-iterable@0.1.3 x 102,152 ops/sec ±0.47% (87 runs sampled)
                    - imlazy@6.3.1 x 317 ops/sec ±3.59% (71 runs sampled)
                    - ramda@0.24.1 x 11,695 ops/sec ±1.61% (86 runs sampled)
                    - immutable@3.8.1 x 22,349 ops/sec ±2.18% (86 runs sampled)
                    - native x 23,462 ops/sec ±1.14% (83 runs sampled)
                    Fastest is slice-arraylike-iterable@0.1.11
            same end parameter
                - few slices
                    - slice-arraylike-iterable@0.1.11 x 216,420 ops/sec ±0.51% (86 runs sampled)
                    - slice-iterable@0.1.3 x 170,974 ops/sec ±2.40% (88 runs sampled)
                    - imlazy@6.3.1 x 8,077 ops/sec ±3.76% (74 runs sampled)
                    - ramda@0.24.1 x 227,937 ops/sec ±0.49% (89 runs sampled)
                    - immutable@3.8.1 x 24,099 ops/sec ±2.06% (87 runs sampled)
                    - native x 368,795 ops/sec ±0.48% (88 runs sampled)
                    Fastest is native
                - enough slices
                    - slice-arraylike-iterable@0.1.11 x 194,737 ops/sec ±0.56% (87 runs sampled)
                    - slice-iterable@0.1.3 x 153,333 ops/sec ±1.71% (85 runs sampled)
                    - imlazy@6.3.1 x 1,656 ops/sec ±4.39% (72 runs sampled)
                    - ramda@0.24.1 x 55,859 ops/sec ±0.59% (86 runs sampled)
                    - immutable@3.8.1 x 23,468 ops/sec ±2.25% (85 runs sampled)
                    - native x 108,141 ops/sec ±0.50% (85 runs sampled)
                    Fastest is slice-arraylike-iterable@0.1.11
                - a lot of slices
                    - slice-arraylike-iterable@0.1.11 x 131,941 ops/sec ±0.54% (85 runs sampled)
                    - slice-iterable@0.1.3 x 104,080 ops/sec ±0.52% (87 runs sampled)
                    - imlazy@6.3.1 x 335 ops/sec ±3.24% (71 runs sampled)
                    - ramda@0.24.1 x 11,593 ops/sec ±1.71% (86 runs sampled)
                    - immutable@3.8.1 x 22,420 ops/sec ±2.31% (85 runs sampled)
                    - native x 24,031 ops/sec ±0.56% (83 runs sampled)
                    Fastest is slice-arraylike-iterable@0.1.11

```

