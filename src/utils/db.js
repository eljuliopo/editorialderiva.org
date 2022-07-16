const faunadb = require("faunadb")
const q = faunadb.query

const serverClient = new faunadb.Client({ secret: process.env.FAUNA_ADMIN_KEY })

async function storePayment(data) {
  try {
    const success = await serverClient.query(q.Create(q.Collection("payments"), { data }))
    return success
  } catch (err) {
    console.error(err)
  }
}

async function retrievePayment(token) {
  try {
    const success = await serverClient.query(q.Get(q.Match(q.Index("payment_by_token"), token)))
    return success
  } catch (err) {
    console.error(err)
  }
}

async function updatePayment(id, data) {
  try {
    const success = await serverClient.query(q.Update(q.Ref(q.Collection("payments"), id), { data }))
    return success
  } catch (err) {
    console.error(err)
  }
}

module.exports = { storePayment, retrievePayment, updatePayment }
