const {expect, test} = require('@oclif/test')

describe('passesperstation', () => {
  test
  .stdout()
  .command(['passesperstation'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['passesperstation', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
