import react.dom.render
import kotlinx.browser.document
import kotlinx.browser.window
import memos.Memos

fun main() {
    window.onload = {
        render(document.getElementById("root")) {
            child(Memos::class) {
            }
        }
    }
}
