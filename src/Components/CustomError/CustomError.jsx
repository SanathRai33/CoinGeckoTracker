import { ErrorBoundary } from "react-error-boundary";
import React from 'react'

const CustomErrorUI = ({ error, resetError }) => {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-gray-100">
            <div role="alert" className="alert alert-error">
                <p>Something went wrong</p>
                <pre>{error?.message}</pre>
                <button onClick={resetError} className="btn btn-primary">Try again</button>
            </div>
        </div>
    )
}

export const CustomErrorBoudary = ({ children }) => {
    return (
        <ErrorBoundary
            FallbackComponent={CustomErrorUI}
            onReset={() => {
                window.location.reload();
            }}
        >
            {children}
        </ErrorBoundary>
    );
}