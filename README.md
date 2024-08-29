StackUp Campaign: [Authentication and Authorisation with ExpressJS](https://earn.stackup.dev/campaigns/authentication-and-authorisation-with-expressjs)

---

# Can/Should delete user functionality be done after authentication?

To answer the question whether delete user functionality can be done after authentication,
we need to have a good understanding of what is authentication and how is it different from
authorisation (which is also covered during this campaign).

## Authentication and Authorisation

### Definition: Authentication

In Quest 1 / [Tutorial 1 - Authentication with ExpressJS](https://earn.stackup.dev/learn/pathways/web-development/skills/backend-development-nodejs/modules/learn-authentication-and-authorisation-with-expressjs/tutorials/tutorial-1-authentication-with-expressjs), 

> Authentication is the **process of verifying user identity** ensuring that the they are the only user that can access their credentials and their information.

Simply put, authentication is the process where you verify or confirm that someone (a user) is who they claim to be.

### Definition: Authorisation

Authorisation, on the other hand, is slightly different. 
It is the process of checking how much access a user has and **granting permissions** accordingly.

## Differenece: Authentication vs Authorisation

Authentication is asking "who are you?" while authorisation is asking "what can you do?".

### Example

Imagine a room filled with many locked cabinets containing various (physical) files of sensitive documents. 
Different locked cabinets requires a different key to access the documents inside.
At the door of the room stands a security guard. 

When a person wishes to access the documents, he have to report to the guard to gain access into the room. 
The guard would ask the person for their credentials to ensure the person is indeed allowed into the room. This process is authentication.
Next, the guard would determine which are the cabinets they are allowed to access, and provide the person with the respective key(s). This process is authorisation.
The person can then proceed into the room and access the sensitive documents in the cabinets (that they have the keys to).

## Requirements Considerations

In the context of a typical user-based system, we would not want everyone to have the ability to delete accounts.
Although it depends on the given system requirements, such systems usually give 2 groups of user the ability of delete accounts.
One would be the account holder themselves, the other are those entrusted with admin privileges.
Other normal users should not have the ability to delete the user's account.

To ensure that only these 2 groups of users can delete accounts, we need to first ensure that they are indeed a user of the system. 
This process reflects authentication of the user.
However, just verifying that they are users of the system is insufficient. We need to ensure that they are specific users (i.e the account holder or admins).
Hence, we need to conduct authorisation to give the ability of deleting the account to the correct users.

### Change in requirements

Perhaps at some point, the system owners decided that user rights are very important. No one else except the user themselves should be allowed to delete the account.
This change in requirements will demand a change in the implementation of authorisation, so that even those with admin prilivages cannot delete other users.

## Conclusion

To summarise, delete user functionality should be done after _both_ authentication and authorisation to ensure that only the correct people can delete the user.
