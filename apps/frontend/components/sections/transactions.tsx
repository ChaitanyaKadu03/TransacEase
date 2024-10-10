"use client"

import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { currentUserId, transactionId } from "@/lib/state"
import { useEffect, useState } from "react"
import { transaction } from "@/lib/types"
import axios from "axios"
import { useRouter } from "next/navigation"

export const description =
  "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions."

export function Transactions() {
  const setTransactionId = useSetRecoilState(transactionId)

  const router = useRouter()

  const thecurrentUserId = useRecoilValue(currentUserId)
  const [allTransactions, setAllTransactions] = useState<Array<transaction>>([
    {
      _id: { $oid: "6706debdc02ce99aaca2a1cf" },
      userId: { $oid: "6706debdc02ce99aaca2a1cf" },
      title: "string",
      description: "string",
      type: "DEBITED",
      category: "string",
      date: { $date: '2024-10-02T15:33:23.930Z' },
      amount: 111,
      currency: "string",
      proof: "string",
      paymentType: "string",
    }
  ])

  useEffect(() => {
    async function get_all_transactions() {
      const result = await axios.get("http://127.0.0.1:8000/api/transactions", { params: { userId: "6706debdc02ce99aaca2a1cf" } })
      // const result = await axios.get("http://127.0.0.1:8000/api/transactions", { params: { userId: thecurrentUserId } })

      if (result.data.success) {
        setAllTransactions(result.data.transactionList)
      } else {
        alert("Error")
      }

    }

    get_all_transactions()
  }, [])

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-7 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Button size="sm" className="h-7 gap-1" onClick={() => {
                  router.push('/api/user/transactions/add')
                }}>
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Transaction
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Products</CardTitle>
                  <CardDescription>
                    Manage your products and view their sales performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead className="hidden md:table-cell">Description</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Category
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Proof
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Id
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Date
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {allTransactions.map(res => {
                        return <TableRow key={res._id.$oid}>
                          <TableCell className="font-medium">
                            {res.title}
                          </TableCell>
                          <TableCell className="hidden md:table-cell max-w-48">
                            {res.description}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{res.type}</Badge>
                          </TableCell>
                          <TableCell>{res.amount}</TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {res.category}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {res.proof}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {res._id.$oid}
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {res.date.$date}
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={async () => {
                                  setTransactionId(res._id.$oid)
                                  router.push('/api/user/transactions/update')
                                }}>Edit</DropdownMenuItem>
                                <DropdownMenuItem onClick={async () => {
                                  const result = await axios.post("http://127.0.0.1:8000/api/transaction/delete",  { "transactionId": res._id.$oid })

                                  if (result.statusText == 'OK') {
                                    window.location.reload()
                                  }

                                }}>Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      })}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
