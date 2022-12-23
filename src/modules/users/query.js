const GET_USERS = `
select * from users
`
const POST_USERS = `
insert into users(firstname,lastname,fathername,phone,address,problem) values($1,$2,$3,$4,$5,$6) returning*
`
const PUT_USERS = `
update users
set checked='checked'
where user_id=$1
returning*
`
export {
  GET_USERS,
  POST_USERS,
  PUT_USERS
}