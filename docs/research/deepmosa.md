# DeepMOSA

### Todo list:
- [x] Select test module that has low coverage on CodaMOSA (exo.viz.topology_viz)
- [ ] Rewrite better parse (via logs)
    - [x] Better Assertion?
    - [x] Better function calling strategy?
    - [ ] More Assignment types?

- [ ] Enhance prompt (code completion for initial prompt & chat completion for predicate prompt)

### Observations:
- Pynguin doesn't actually consider staticmethods - they are tested indirectly via other test objects that call it.
- CodaMOSA currently support only assertion between:
    - a variable and a constant or assertable
