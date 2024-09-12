foo <- function() {
  print(3)
}

foo() # returns the value in the function/ calls the function
foo # prints the function code itself

x <- runif(100, 15, 100)
xbar <- mean(x)
xsd <- sd(x)
z <- (x - xbar) / xsd
mean(z)
sd(z)

std <- function() {
  xbar <- mean(x)
  xsd <- sd(x)
  z <- (x - xbar) / xsd
}                         #need to pass in an argument to tell them what to calculate mean and sd of

std <- function(x) {
  xbar <- mean(x)
  xsd <- sd(x)
  z <- (x - xbar) / xsd
  return(z) # could also say just "z" but just try to use return for good coding hygiene
}  

std(c(2, 5, 2)) # not gonna break but not gonna return anything, we havent returned z

std(c(1, 2, 5, NA)) # not gonna work, need to do na.rm

std2 <- function(x, na.rm_arg) {
  xbar <- mean(x, na.rm = na.rm_arg)
  xsd <- sd(x, na.rm = na.rm_arg)
  z <- (x - xbar) / xsd
  return(z) 
}  # where na.rm is the name of the argument, and na.rm_arg is the value I am 
   # passing in for the argument

std2(c(1, 2, 5, NA), TRUE)
std2(c(1, 2, 5, NA), FALSE) 

# Add default argument:
std3 <- function(x, y = "cat", na.rm_arg = FALSE) {
  xbar <- mean(x, na.rm = na.rm_arg)
  xsd <- sd(x, na.rm = na.rm_arg)
  z <- (x - xbar) / xsd
  return(z) 
}

std3(c(1, 2, 5, NA), "dog", FALSE)
std3(c(1, 2, 5, NA)) # Now both work!!

# Takes in a vector of numerics and generates their z scores and returns z score vector
# MUST FOLLOW ROXYGEN DOCUMENTATION IN HW 
#' Title Standardize a vector of numerics
#' 
#' Description of what it does (optional)
#' 
#' Details of what it does (optional)
#'
#' @param x vector of numerics
#' @param na.rm_arg logical, should NA's be removed? Default is FALSE
#'
#' @return vector of standardized numerics
#' @export 
#'
#' @examples 
#' x <- runif(2,5,10)
#' std4(x)
std4 <- function(x, na.rm_arg = FALSE) {
  xbar <- mean(x, na.rm = na.rm_arg)
  xsd <- sd(x, na.rm = na.rm_arg)
  z <- (x - xbar) / xsd
  return(z) 
}

#######################################################################################

# How to get your function to tell you what type of input it takes : if statement
std5 <- function(x, na.rm_arg = FALSE) {
  # if x is NOT numeric
  if(!is.numeric(x)) {
    warning("X must be numeric, attempting to covert") # to let them know something is not right
    # tries to make input the numeric type
     x <- as.numeric(x)
     if (ALL(is.numeric(x))) {
       stop("X must be numeric or covertible to numeric") # stops the function and produces an error
     }
  }
  if (length(x) == 0) {
    stop("x must have strictly positive length")
  }
  if (!is.logical(na.rm)) {
    stop("na.rm must be logical")
  }
  xbar <- mean(x, na.rm = na.rm_arg)
  xsd <- sd(x, na.rm = na.rm_arg)
  z <- (x - xbar) / xsd
  return(z) 
}

std5(c("1", "2", "3"))
std5(c("1", "2"))
std5(c("a", "b")) # STILL RAN; CON OF WARNING

# talk about scope
foo <- function(x) {
  x <- 4
  x
}

x <- 5
foo(x) # foo returns 4, but x in the global environment stayed 5

#######################################################################################
# How to turn a local variable into a global variable ONLY FOR debugging!! not production

# only local variable
baz <- function() {
  p <- 5
  return(p)
}

baz()

# local to global
baz <- function() {
  p <<- 5 # double arrow 
  return(p)
}

baz()

#######################################################################################

foo <- function() {
  print(1)
  return(2)
  print(3)
}                     # will ONLY print 1 2, anything after return statement is not gonna run
                      # returns can be placed anywhere in function though


#######################################################################################

# For loops:
# do not have to be numeric

for(i in c("a", "g", "e")) {
  print(i)
}

# More conditional

sum <- 0
for (i in 1:100){
  sum <- sum + i
  if (sum >= 15) {
    break #breaks the loop
  }
}
sum

# only adding even numbers
sum <- 0
for (i in 1:100){
  if (i %% 2 == 0) {
    next # lets it keep going if even
  }
  print(sum)
  sum <- sum + i
  if (sum >= 15) {
    break #breaks the loop
  }
}
sum

#######################################################################################

# while loop
# use if u want it done continuously till a stop spot
