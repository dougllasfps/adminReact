package org.dougllasfps.application.exception;

/**
 * Criado por dougllas.sousa em 10/10/2018.
 */
public class ApplicationException extends RuntimeException{
    /**
     * Constructs a new exception with {@code null} as its detail message.
     * The cause is not initialized, and may subsequently be initialized by a
     * call to {@link #initCause}.
     */
    public ApplicationException() {
    }

    /**
     * Constructs a new exception with the specified detail message.  The
     * cause is not initialized, and may subsequently be initialized by
     * a call to {@link #initCause}.
     *
     * @param message the detail message. The detail message is saved for
     *                later retrieval by the {@link #getMessage()} method.
     */
    public ApplicationException(String message) {
        super(message);
    }
}
