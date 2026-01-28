/*
 * name: Jarod Chan
 * CS364 - H2
 * Documentation: I asked Claude AI to review my regex for question 10, as
 *  it was generating false positives. While the AI suggested that I use
 *  anchors in my regex, I tried adding those but that did not fix the issue.
 *  After further visual inspection, I realized that the "." before each
 *  required character set should have been replaced with a "\w" to check
 *  for word characters instead of allowing all characters. In this sense,
 *  AI actually proved to be more misleading than beneficial for this
 *  assignment. A link to the chat log is attached here:
 *  https://claude.ai/share/3ca30c5e-765e-436e-9dec-55d67dd07e7c
 *
 */

//1: match the word "hello"
const regex01 = /\b(hello)\b/

//2: match phone numbers in the format (123) 456-7890
const regex02 = /\(\d{3}\)\s\d{3}-\d{4}/

//3: match valid email addresses
const regex03 = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/

//4: find all words that start with a capital letter
const regex04 = /\b[A-Z][a-z]\w*\b/

//5: match strings with any one of these characters: ; [, ], {, }, ^ 
const regex05 = /\w*[;\[\]\{\}\^]+\w*/

//6: match dates in the format DD/MM/YYYY
const regex06 = /\b(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}\b/

//7: find all words that are exactly 4 characters long
const regex07 = /\b\w{4}\b/

//8: to find sequences where any character is repeated three or more times 
const regex08 = /(.)\1{2,}/

//9: match URLs starting with http:// or https://
const regex09 = /\bhttp[s]?:\/\/(\w+\.)+\w+\b/

//10: Validate a Password
const regex10 = /(?=\w*[A-Z])(?=\w*[a-z])(?=\w*\d)[A-Za-z\d]{8,}/


