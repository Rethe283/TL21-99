const {expect, test} = require('@oclif/test')

describe('resetstations', () => {
  test
  .stdout()
  .command(['resetstations'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['resetstations', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
