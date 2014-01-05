from pymongo import Connection
import json,time


################################################################################
#
#        setting up the database
#
################################################################################

c = Connection()
db = c.programapp
users = db.users

    


################################################################################
#
#        User routines
#
################################################################################


def checkCredentials(username,password):
    res=users.find({"email":email,"passsword":password})
    return len([x for x in res])==1

def addUser(email,password):
    res = users.find({'email':email})
    if len([x for x in res])>0:
        return None
    users.insert({'email':email,'password':password,
                  'id':email})
    return (username,password)


################################################################################
#
#        main (for testing)
#
################################################################################

if __name__=='__main__':
   pass
