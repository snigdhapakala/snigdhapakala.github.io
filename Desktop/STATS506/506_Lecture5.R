# 3 readable ways
if (3 < 2) {
  a <- 4
  
} else {
  a <- 6
}


a <- if (3 < 2) {
  4
} else {
  6
}

a <- ifelse(3 < 2, 4, 6)

# Vectorization 
sum(c(2, 3, 4)) 

# write our own sum function
x <- c(5, 2, 6, 1, 2, 3)
s0 <- 0
x[1] + x[2] + ... # will be tedious, do loop instead


for (i in 1: length(x)){
  s0 <- s0 + i
}

mysum <- function(x){
  s0 <- 0
  for (i in 1: length(x)){
    s0 <- s0 + x[i]
  }
  return(s0)
}

y <- c(2, 5, 2, 5)
mysum(y)
sum(y) # sum is way faster, power of vectorization


l1 <- list(c(1, 2, 3), c(1), c(1:10))
length(l1) # 3 objects in list
sapply(l1, length) # gives length of each element in the list

m <- matrix(c(2, 3, 4, 1, 2, 3, 1, 2), nrow = 4)
mean(m[, 1])
mean(m[, 2])

apply(m, 2, mean) # take matrix m and down each column, take the mean
apply(m, 1, mean) # same thing by row
apply(m, c(1, 2), mean) # mean per row and col aka per cell

m <- matrix(c(2, NA, 4, 1, 2, 3, 1, 2), nrow = 4)
apply(m, 2, mean)
apply(m, 2, mean, na.rm = TRUE) # question: why does this work??

abs_and_mean <- function(k, na.rm = FALSE){
  mean(abs(k), na.rm = na.rm)
}

apply(m, 2, abs_and_mean, na.rm = TRUE)

# anonymous function that still works 
apply(m, 2, function(k, na.rm = TRUE) {
  mean(abs(k), na.rm = TRUE)
})

# apply only works on rectangular datasets; mostly used for matrices and arrays alone
l1 <- list(c(1, 2, 3), c(1), c(1:10))
lapply(l1, length) # takes list and applies legnth function for each; RETURNS LIST; put list in get list out
sapply(l1, length) # vector form, s for simplify, easier to work with but also dangerous

l2 <- list(matrix(1:4, nrow = 2), matrix(1:6, nrow = 3), array(1:8, dim=c(2, 2, 2)))
lapply(l2, dim)
sapply(l2, dim) # cannot simplify the format any further

l3 <- list(matrix(1:4, nrow = 2), matrix(1:6, nrow = 3), array(1:8, dim=c(2, 4)))
lapply(l3, dim)
sapply(l3, dim)   

vapply(mtcars, mean, 1) # safest one to use, because have to provide example of what output should look like i.e. a single num

# for multiple objects ** OF SAME LEGNGTH which is key
 
index_of_category <- c(1, 4)
price_by_category <- list(1:3, 1:5)

mapply(function(x, index){
  x[index]
}, price_by_category, index_of_category) # reverses order, function first



data(iris)
iris

# average by type of iris; group by function
tapply(iris$Petal.Length, iris$Species, mean)


################################################################################


negabs1 <- function(x) {
  if (x <= 0) {
    return(x)
  }
  if (x > 0) {
    return (-x)
  }
}

negabs1(c(2, -3)) # errors because if statement assumes argument is of length 1


negabs2 <- function(x) {
  out <- vector(length = length(x))
  for (i in 1: length(x)) {
    out[i] <- if (x[i] <= 0) {
      x[i]
    } else {
      - x[i]
    }
  }
  return(out)
}

negabs2(-1)

# way slower, inefficient version
negabs3 <- function(x) {
  out <- c()
  for (i in 1: length(x)) {
    out[i] <- c(if (x[i] <= 0) {
      x[i]
    } else {
      - x[i]
    })
  }
  return(out)
}

negabs3(-1)


# most efficient way:
negabs4 <- function(x) {
  -abs(x)
}

negabs4(-1)

################################################################################

# generate aritificial data
?Distributions

set.seed(43)

# Monte carlo simulation

x <- runif(1, -1, 1) # gimme x coord between -1 and 1
y <- runif(1, -1, 1) # gimme ycoord

c(x, y)
sqrt(x^2 + y^2) <= 1 # if it equals 1 then it is inside the circle

estimate_pi <- function(n) {
  xcoords <- runif(n, -1, 1)
  ycoords <- runif(n, -1, 1)
  in_circle <- sqrt(xcoords^2 + ycoords^2) <= 1 # vectorized operation of trues and falses which will tell me what percent of points fall in circle versus outside
  return(4 * (sum(in_circle) / n)) # 4 * area of circle / area of square gives us pi estimate
}
estimate_pi(100000)
estimate_pi(10000000) 

# example of monte carlo simulation