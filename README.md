Benchmark [functor-iterable](https://github.com/xgbuils/functor-iterable) over...

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
    map
        array
            - small
                - functor-iterable@0.1.0 x 62,431 ops/sec ±0.18% (93 runs sampled)
                - imlazy@6.3.1 x 40,749 ops/sec ±2.05% (91 runs sampled)
                - ramda@0.24.1 x 1,582,178 ops/sec ±0.24% (90 runs sampled)
                - immutable@3.8.1 x 78,053 ops/sec ±1.83% (83 runs sampled)
                - native x 71,903 ops/sec ±0.15% (92 runs sampled)
                Fastest is ramda@0.24.1
            - medium
                - functor-iterable@0.1.0 x 2,422 ops/sec ±0.96% (94 runs sampled)
                - imlazy@6.3.1 x 2,028 ops/sec ±1.62% (92 runs sampled)
                - ramda@0.24.1 x 96,097 ops/sec ±1.02% (90 runs sampled)
                - immutable@3.8.1 x 3,093 ops/sec ±1.42% (92 runs sampled)
                - native x 2,274 ops/sec ±0.15% (95 runs sampled)
                Fastest is ramda@0.24.1
            - big
                - functor-iterable@0.1.0 x 76.30 ops/sec ±0.74% (76 runs sampled)
                - imlazy@6.3.1 x 66.30 ops/sec ±0.86% (67 runs sampled)
                - ramda@0.24.1 x 3,141 ops/sec ±0.86% (94 runs sampled)
                - immutable@3.8.1 x 82.75 ops/sec ±1.70% (69 runs sampled)
                - native x 56.74 ops/sec ±1.17% (71 runs sampled)
                Fastest is ramda@0.24.1
    multiple maps
        array
            iterable size
                - small
                    - functor-iterable@0.1.0 x 30,155 ops/sec ±0.08% (94 runs sampled)
                    - imlazy@6.3.1 x 10,821 ops/sec ±3.14% (75 runs sampled)
                    - ramda@0.24.1 x 73,305 ops/sec ±0.09% (94 runs sampled)
                    - immutable@3.8.1 x 12,311 ops/sec ±2.72% (85 runs sampled)
                    - native x 7,208 ops/sec ±0.16% (94 runs sampled)
                    Fastest is ramda@0.24.1
                - medium
                    - functor-iterable@0.1.0 x 1,850 ops/sec ±0.18% (94 runs sampled)
                    - imlazy@6.3.1 x 1,388 ops/sec ±1.81% (88 runs sampled)
                    - ramda@0.24.1 x 8,857 ops/sec ±0.88% (93 runs sampled)
                    - immutable@3.8.1 x 528 ops/sec ±2.03% (86 runs sampled)
                    - native x 227 ops/sec ±0.13% (85 runs sampled)
                    Fastest is ramda@0.24.1
                - big
                    - functor-iterable@0.1.0 x 58.96 ops/sec ±0.13% (74 runs sampled)
                    - imlazy@6.3.1 x 49.15 ops/sec ±0.13% (63 runs sampled)
                    - ramda@0.24.1 x 318 ops/sec ±1.16% (86 runs sampled)
                    - immutable@3.8.1 x 14.82 ops/sec ±3.06% (40 runs sampled)
                    - native x 5.67 ops/sec ±2.01% (19 runs sampled)
                    Fastest is ramda@0.24.1
            number of maps
                - few
                    - functor-iterable@0.1.0 x 2,288 ops/sec ±0.11% (93 runs sampled)
                    - imlazy@6.3.1 x 1,823 ops/sec ±1.50% (92 runs sampled)
                    - ramda@0.24.1 x 28,008 ops/sec ±1.01% (94 runs sampled)
                    - immutable@3.8.1 x 1,473 ops/sec ±1.86% (89 runs sampled)
                    - native x 757 ops/sec ±0.20% (92 runs sampled)
                    Fastest is ramda@0.24.1
                - enough
                    - functor-iterable@0.1.0 x 1,831 ops/sec ±0.69% (93 runs sampled)
                    - imlazy@6.3.1 x 1,383 ops/sec ±2.03% (89 runs sampled)
                    - ramda@0.24.1 x 9,089 ops/sec ±1.05% (92 runs sampled)
                    - immutable@3.8.1 x 547 ops/sec ±1.71% (89 runs sampled)
                    - native x 229 ops/sec ±0.17% (86 runs sampled)
                    Fastest is ramda@0.24.1
                - a lot of
                    - functor-iterable@0.1.0 x 1,109 ops/sec ±0.11% (94 runs sampled)
                    - imlazy@6.3.1 x 522 ops/sec ±1.29% (88 runs sampled)
                    - ramda@0.24.1 x 1,997 ops/sec ±0.98% (94 runs sampled)
                    - immutable@3.8.1 x 171 ops/sec ±1.89% (77 runs sampled)
                    - native x 66.22 ops/sec ±0.12% (67 runs sampled)
                    Fastest is ramda@0.24.1
```

