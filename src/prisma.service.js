const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const Dbug = async () => {
	try {
		console.log('Conectando ao banco de dados')
		await prisma.$connect()
	} catch (error) {
		console.log('Falha ao conectar:\n', error)
		await prisma.$disconnect()
	}
}
Dbug()

exports.prisma = prisma