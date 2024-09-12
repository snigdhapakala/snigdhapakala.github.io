setwd("~/Desktop/")
dir()
# Read tables in CSV form
myData <- read.table("table_name.csv", sep = ",")
# write and create your own file
write.csv(myNewData, file="test.csv")

# every vector has elements of ONE type, and every vector has a length; every vector has a mode
a <- c(2,3)
typeof(a)
length(a)

b <- "b"
typeof(b)

c <- TRUE
typeof(c)

d <- 1L
typeof(d)

# 4 important types: integer, double, character, logical

typeof(NaN) #Not A Number
typeof(NA) #can be logical or numeric, can switch

c() # creates ab empty vector
nullVec <- c()
length(nullVec)
typeof(nullVec)

vector("character", length=10) # helps you create a vector with exact length and type, much better than using c()


#extraction
v <- c(2, 5, 1, 2, NA)
v[2] #R is a 1-index language, v[2] refers to the second position in V, which is 5

# slice
v[1:3] #returns the 1st 3 elements of the vector

#drop elements
v[-(1:3)]

#vector of logicals
v[c(TRUE, FALSE, TRUE, TRUE, FALSE)] #not too useful
v[v > 3]




# Lists
# can be different types 
list(1, "a")
l <- list(1, "a", mtcars)
length(l)
typeof(l) # will return list
sapply(l, typeof) # will return type of each element in list
sapply(l, length)

# ** ask about this**
ll <- l[2]
typeof(ll)
ll
l[2]
l[[2]]


newL <- list(c(1,2), c("a", "b", "c"))
(newL[[2]])[3]
(newL[[2]]) # gives us the second item in newL, which is the abc vector
[3] # gives us the 3rd element within that 2nd subset


a <- c(1, 2, 3)
a[2]

b <- c("first" = 1, "second" = 2)     #passing in arguments with names
b
b["first"]
names(b) #extracts names; can also be used to change names
names(b) <- c("uno", "dos")
b
names(b)[1] <- "abc"
b


# named lists
ll <- list(a = 1, b = 2) # $ notation pulls it out by name
ll$b


# classes
a
class(a)
class(a) <- "character" # allows it to change
class(a)
class(a) <- c("cat", "dog")
a


#matrices
m <- matrix(c(1, 2, 3, 4), nrow = 2)
typeof(m)
mode(m)
class(m) # two values returned
length(m) # 4 values, will return 4
dim(m) # gives us row x col dimensions
dim(m) <- c(1,4) # dimensions can be changed
dim(m)
m
dim(m) <- c(2, 3) # will error out; dimensions are not compatible
dim(m) <- c(2, 2) 
m[,] # whole matrix

# slicing in matrices
m[1,1]
m[1:2, 1] # first 2 row elements, in 1st column
m[1, 1:2] # first row, 2 columns
m[1,] # gives us ALL columns

#n dimensional matrix
m <- matrix(c(1:9), nrow = 3)
m

# ** r is column dominant, fills out down the columns
# change this with additional argument:
matrix(1:9, nrow = 3, byrow = TRUE)


# ATTRIBUTES IN SEPT 3 LECTURE SCRIPT

# data frames
df <- data.frame(a = 1:4,
           b = c("a", "b", "c", "d"),
           c = c(TRUE, TRUE, NA, NA))
df[,1] #column of numerics
df$a #identical column of numerics as above AS ROWS
df["a"] # gives columns
