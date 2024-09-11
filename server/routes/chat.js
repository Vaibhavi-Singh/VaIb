import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { addMembers, deleteChat, getChatDetails, getMessages, getMyChats, getMyGroups, leaveGroup, newGroupChat, remomveMember, renameGroup, sendAttachments } from "../controllers/chat.js";
import { attachmentsMulter } from "../middlewares/multer.js";
import { addMemberValidator, newGroupValidator, removeMemberValidator, validateHandler } from "../lib/validators.js";

const app = express.Router();

// after here user must be logged into access the routes

app.use(isAuthenticated);

app.post("/new",newGroupValidator(),validateHandler,newGroupChat);
app.get("/my",getMyChats);
app.get("/my/groups",getMyGroups);
app.put("/addmembers",addMemberValidator(),validateHandler,addMembers);
app.put("/removemember",removeMemberValidator(),validateHandler,remomveMember);
app.delete("/leave/:id",leaveGroup);
app.post("/message",attachmentsMulter,sendAttachments);
app.get("/message/:id",getMessages);
app.route("/:id").get(getChatDetails).put(renameGroup).delete(deleteChat);



export default app;