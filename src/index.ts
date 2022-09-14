import { API } from "./modules/api";
import { USER_ID } from "./envs"

console.log({USER_ID})

function doPost(
  ev: GoogleAppsScript.Events.DoPost
): GoogleAppsScript.Content.TextOutput {
  const data = new API().fetch();
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  );
}
