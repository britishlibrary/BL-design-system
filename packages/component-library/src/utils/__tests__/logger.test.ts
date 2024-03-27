import logger from '../logger'

describe('logger', () => {
  let consoleLogSpy: jest.SpyInstance
  let consoleWarnSpy: jest.SpyInstance
  let consoleErrorSpy: jest.SpyInstance

  beforeEach(() => {
    // Mock console methods before each test
    /* eslint-disable */
    consoleLogSpy = jest
      .spyOn(global.console, 'log')
      .mockImplementation(() => {})
    consoleWarnSpy = jest
      .spyOn(global.console, 'warn')
      .mockImplementation(() => {})
    consoleErrorSpy = jest
      .spyOn(global.console, 'error')
      .mockImplementation(() => {})
    /* eslint-enable */
  })

  afterEach(() => {
    // Restore the original implementations after each test
    jest.restoreAllMocks()
  })

  describe('debug', () => {
    it('invokes `console.log` with the correct message', () => {
      logger.debug('Hello, World!')
      expect(consoleLogSpy).toHaveBeenCalledTimes(1)
      expect(consoleLogSpy).toHaveBeenCalledWith('DEBUG - BLDS - Hello, World!')
    })
  })

  describe('warn', () => {
    it('invokes `console.warn` with the correct message', () => {
      logger.warn('Hello, World!')
      expect(consoleWarnSpy).toHaveBeenCalledTimes(1)
      expect(consoleWarnSpy).toHaveBeenCalledWith('WARN - BLDS - Hello, World!')
    })
  })

  describe('error', () => {
    it('invokes `console.error` with the correct message', () => {
      logger.error('Hello, World!')
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'ERROR - BLDS - Hello, World!'
      )
    })
  })
})
