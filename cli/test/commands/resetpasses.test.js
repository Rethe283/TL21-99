const {expect, test} = require('@oclif/test')

describe('resetpasses', () => {
  test
  .stdout()
  .command(['resetpasses'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['resetpasses', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
