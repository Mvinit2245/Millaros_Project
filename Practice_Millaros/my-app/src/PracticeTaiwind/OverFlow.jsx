// Overflow and Text Truncation
// Control content that exceeds its container using overflow-hidden, overflow-auto, truncate, and line-clamping utilities.

import React from 'react'

function OverFlow() {
  return (
    <div>
      <div className="space-y-8 p-8">
      <div className="h-24 w-64 overflow-auto rounded border border-gray-300 p-3">
        This container has a fixed height. Add more text here to
        create scrolling content. Keep adding more text to see the
        vertical scrollbar appear.
      </div>

      <p className="w-64 truncate rounded bg-blue-100 p-3">
        This is a long sentence that will be cut off with an ellipsis.
      </p>

      <p className="line-clamp-2 max-w-sm text-gray-700">
        Tailwind CSS makes it easy to control text overflow. This
        paragraph should display only two lines before truncating
        the remaining content.
      </p>
    </div>
    </div>
  )
}

export default OverFlow
