#include <stdio.h>
#include <string.h>
#include <emscripten.h>

// Simple function to convert bold markdown **bold** to HTML <b>bold</b>
EMSCRIPTEN_KEEPALIVE
const char* convert_markdown_to_html(const char* markdown) {
    static char html_output[1024]; // Store the output HTML

    // Example: convert **bold** to <b>bold</b>
    if (strstr(markdown, "**") != NULL) {
        char* start = strstr(markdown, "**");
        char* end = strstr(start + 2, "**");
        
        if (start != NULL && end != NULL) {
            snprintf(html_output, sizeof(html_output), "<b>%.*s</b>", (int)(end - start - 2), start + 2);
        }
    } else {
        snprintf(html_output, sizeof(html_output), "%s", markdown);
    }

    return html_output;
}

int main() {
    // Basic test to verify it's working
    printf("WASM Initialized!\n");
    return 0;
}
