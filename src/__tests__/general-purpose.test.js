import { convertHtml } from "../utils/general-purpose.js"

test("converts html text from server to html text proper for dangerouslySetInnerHTML object", () => {
    const intputHtmlTextD = '&lt;p&gt;This is apmersand: &amp;, This is double quote: &quot;word&quot;&lt;p&gt;';
    const intputHtmlTextS = '&lt;p&gt;This is apmersand: &amp;, This is single quote: &#039;word&#039;&lt;p&gt;';

    const expectedHtmlTextD = '<p>This is apmersand: &, This is double quote: "word"<p>';
    const expectedHtmlTextS = "<p>This is apmersand: &, This is single quote: 'word'<p>";

    const actualHtmlTextD = convertHtml(intputHtmlTextD);
    const actualHtmlTextS = convertHtml(intputHtmlTextS);

    expect(actualHtmlTextD).toBe(expectedHtmlTextD);
    expect(actualHtmlTextS).toBe(expectedHtmlTextS);
});