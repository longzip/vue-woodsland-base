SELECT GUID as id,
'abcd' as costcenter,
 CONCAT(id, '.com'); as email,
 LAST_NAME as name,
 ACCOUNT as username,
 [PASSWORD] as password,
 TYPE_USER as role,
 '/disk/img/avatar.png' as avatar,
 GETDATE() as createdAt,
 GETDATE() as updatedAt
 FROM base.ACCOUNT

 select * from base.ACCOUNT