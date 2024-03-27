export type LogLevel = 'debug' | 'info' | 'warn' | 'error'

export type Logger = Record<LogLevel, typeof console.log>

const BLDS_LOG_LEVEL = '__BLDS_LOG_LEVEL'
const levels: LogLevel[] = ['debug', 'info', 'warn', 'error']

function isValidLogLevel(
  logLevel: string,
  index: number
): logLevel is LogLevel {
  const enabledLevel = levels.indexOf(
    logLevel.toString().toLowerCase() as LogLevel
  )

  return enabledLevel > -1 && index >= enabledLevel
}

/**
 * Generates a `logger[debug | info | warn | error](...args)`
 * Log level is set at build time via `BLDS_LOG_LEVEL` env var
 *
 */
export default levels.reduce((logger, level: LogLevel, index: number) => {
  return {
    ...logger,
    [level]: (...args: unknown[]) => {
      const func = level === 'debug' ? 'log' : level

      if (BLDS_LOG_LEVEL && console && isValidLogLevel(BLDS_LOG_LEVEL, index)) {
        const [message, ...rest] = [...args]

        // eslint-disable-next-line no-console
        console[func](`${level.toUpperCase()} - BLDS - ${message}`, ...rest)
      }
    },
  }
}, {} as Logger)
