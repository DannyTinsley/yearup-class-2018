class Calculator
  def initialize
    puts "Please enter your operation (+, -)"
    @user_input = gets.chomp
    if user_input.length > 1
      raise "UserError: User did not enter one operator"
    else
      if user_input.include? '+'
        self.addTwo
      end
      if user_input.include? '-'
        self.subTwo
      end
    end
  end

  def addTwo
    puts "Two numbers plz ty"
    puts "number 1"
    num1 = gets.chomp.to_i
    puts "number 2"
    num2 = gets.chomp.to_i
    puts num1 + num2
  end

  def subTwo
    puts "Two numbers plz ty"
    puts "number 1"
    num1 = gets.chomp.to_i
    puts "number 2"
    num2 = gets.chomp.to_i
    puts num1 - num2
  end

end




