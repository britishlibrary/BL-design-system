export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | '__MODDS_LOG_LEVEL'

export type Logger = Record<LogLevel, typeof console.log>
interface CustomConsole extends Console {
  __MODDS_LOG_LEVEL: {
    <T>(...data: T[]): void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (message: unknown | string, ...optionalParams: any[]): void
  }
}

const MODDS_LOG_LEVEL: LogLevel = '__MODDS_LOG_LEVEL'
const levels: LogLevel[] = ['debug', 'info', 'warn', 'error']

function isValidLogLevel(logLevel: LogLevel, index: number): boolean {
  const enabledLevel = levels.indexOf(
    logLevel.toString().toLowerCase() as LogLevel
  )

  return enabledLevel > -1 && index >= enabledLevel
}

/**
 * Generates a `logger[debug | info | warn | error](...args)`
 * Log level is set at build time via `MODDS_LOG_LEVEL` env var
 *
 */
export default levels.reduce((logger, level: LogLevel, index: number) => {
  return {
    ...logger,
    [level]: (...args: unknown[]) => {
      const func = level === 'debug' ? 'log' : level

      if (
        MODDS_LOG_LEVEL &&
        console &&
        isValidLogLevel(MODDS_LOG_LEVEL, index)
      ) {
        const [message, ...rest]: [string, ...unknown[]] = args as [
          string,
          ...unknown[]
        ]

        // eslint-disable-next-line no-console
        ;(console as CustomConsole)[func](
          `${level.toUpperCase()} - MODDS - ${message}`,
          ...rest
        )
      }
    },
  }
}, {} as Logger)
